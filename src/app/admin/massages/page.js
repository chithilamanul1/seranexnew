'use client';
import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

const MessageRow = ({ msg }) => (
    <div className="border-b border-white/10 p-4 grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
        <div>
            <div className="font-bold text-white">{msg.name}</div>
            <div className="text-white/60">{msg.email}</div>
        </div>
        <div className="col-span-2">
             <div className="font-semibold text-white/80 mb-1">{msg.subject || 'No Subject'}</div>
            <p className="text-white/70">{msg.message}</p>
        </div>
        <div className="text-white/50 md:text-right">
            {/* Check if createdAt exists before converting */}
            {msg.createdAt ? new Date(msg.createdAt.seconds * 1000).toLocaleString() : 'No date'}
        </div>
    </div>
);

export default function MessagesPage() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const messagesCollection = collection(db, 'messages');
                const q = query(messagesCollection, orderBy('createdAt', 'desc'));
                const querySnapshot = await getDocs(q);
                const messagesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setMessages(messagesData);
            } catch (error) {
                console.error("Error fetching messages: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMessages();
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-8">Contact Form Messages</h1>
            <div className="rounded-xl border border-white/10 bg-white/5">
                {loading ? (
                    <p className="p-4 text-center text-white/50">Loading messages...</p>
                ) : messages.length > 0 ? (
                    messages.map(msg => <MessageRow key={msg.id} msg={msg} />)
                ) : (
                    <p className="p-4 text-center text-white/50">No messages found. Try submitting one from the contact page!</p>
                )}
            </div>
        </div>
    );
}