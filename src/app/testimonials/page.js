'use client'; // This page is interactive, so it must be a Client Component

import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useUser, SignInButton } from '@clerk/nextjs';
import { FaStar } from 'react-icons/fa';
import { collection, addDoc, query, orderBy, getDocs, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase'; // Assuming your firebase config is here

export default function TestimonialsPage() {
  const { user, isSignedIn } = useUser();
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch testimonials when the component mounts
  useEffect(() => {
    const fetchTestimonials = async () => {
      setIsLoading(true);
      const testimonialsQuery = query(collection(db, "testimonials"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(testimonialsQuery);
      const fetchedTestimonials = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTestimonials(fetchedTestimonials);
      setIsLoading(false);
    };

    fetchTestimonials();
  }, []);

  return (
    <>
      <Head>
        <title>Testimonials | SERANEX</title>
        <meta name="description" content="See what our clients say about their experience working with SERANEX to build their digital products." />
      </Head>

      <div className="w-full pt-24 sm:pt-32 pb-16">
        {/* Page Header */}
        <section className="text-center px-6 pb-16">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter animate-fade-in-down">
              What Our Clients Say
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400 animate-fade-in-up [animation-delay:0.2s]">
              We are proud to be a trusted engineering partner for businesses worldwide. Here is what some of our clients have to say about their experience.
            </p>
          </div>
        </section>

        {/* Submission Form Section */}
        <section className="px-6 mb-24">
          <div className="max-w-4xl mx-auto">
            {isSignedIn ? (
              <SubmissionForm user={user} onTestimonialAdded={(newTestimonial) => setTestimonials([newTestimonial, ...testimonials])} />
            ) : (
              <LoginPrompt />
            )}
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              // Show loading skeletons
              Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
            ) : (
              testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))
            )}
          </div>
        </section>
      </div>
    </>
  );
}

// --- Reusable Components for this Page ---

// The form that appears for logged-in users
const SubmissionForm = ({ user, onTestimonialAdded }) => {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0 || !message) {
      setError('Please provide a rating and a message.');
      return;
    }
    setIsSubmitting(true);
    setError('');

    try {
      const newTestimonial = {
        message,
        rating,
        authorId: user.id,
        authorName: user.fullName || user.emailAddresses[0].emailAddress.split('@')[0],
        authorImage: user.imageUrl,
        createdAt: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, "testimonials"), newTestimonial);
      onTestimonialAdded({ id: docRef.id, ...newTestimonial, createdAt: { toDate: () => new Date() }}); // Add to UI instantly
      setMessage('');
      setRating(0);

    } catch (err) {
      setError('Failed to submit testimonial. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-2">Leave Your Feedback</h2>
      <p className="text-gray-400 mb-6">Share your experience working with us.</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Your Rating</label>
          <StarRating rating={rating} setRating={setRating} />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-300">Your Message</label>
          <textarea name="message" id="message" rows={4} required value={message} onChange={(e) => setMessage(e.target.value)} className="mt-2 block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"></textarea>
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <button type="submit" disabled={isSubmitting} className="w-full rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 disabled:bg-gray-600 transition-all">
          {isSubmitting ? 'Submitting...' : 'Submit Testimonial'}
        </button>
      </form>
    </div>
  );
};

// The prompt that appears for logged-out users
const LoginPrompt = () => (
  <div className="text-center bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
    <h2 className="text-2xl font-bold text-white mb-2">Join the Conversation</h2>
    <p className="text-gray-400 mb-6">Sign in to share your feedback and experience.</p>
    <SignInButton mode="modal">
      <button className="rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition-transform transform hover:scale-105">
        Sign In to Leave a Review
      </button>
    </SignInButton>
  </div>
);

// The interactive 5-star rating component
const StarRating = ({ rating, setRating }) => {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} className="hidden" />
            <FaStar
              className="cursor-pointer transition-colors"
              color={ratingValue <= (hover || rating) ? "#2563EB" : "#4A5568"}
              size={30}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
    </div>
  );
};

// The card used to display a single testimonial
const TestimonialCard = ({ testimonial }) => (
  <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 h-full flex flex-col">
    <div className="flex-grow">
      <div className="flex text-blue-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} color={i < testimonial.rating ? 'currentColor' : '#4A5568'} />
        ))}
      </div>
      <blockquote className="text-gray-300 italic">"{testimonial.message}"</blockquote>
    </div>
    <div className="mt-6 flex items-center">
      <img className="h-12 w-12 rounded-full object-cover" src={testimonial.authorImage} alt={testimonial.authorName} />
      <div className="ml-4">
        <div className="text-base font-bold text-white">{testimonial.authorName}</div>
      </div>
    </div>
  </div>
);

// A skeleton card for the loading state
const SkeletonCard = () => (
  <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
    <div className="flex space-x-1 text-gray-700 mb-4">
      {[...Array(5)].map((_, i) => <FaStar key={i} />)}
    </div>
    <div className="space-y-3">
      <div className="h-4 bg-gray-700 rounded w-full"></div>
      <div className="h-4 bg-gray-700 rounded w-5/6"></div>
      <div className="h-4 bg-gray-700 rounded w-3/4"></div>
    </div>
    <div className="mt-6 flex items-center">
      <div className="h-12 w-12 rounded-full bg-gray-700"></div>
      <div className="ml-4 h-4 bg-gray-700 rounded w-1/3"></div>
    </div>
  </div>
);
