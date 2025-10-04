'use client';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';

// Mock data for invoices
const invoices = [
    { id: "INV-001", date: "2024-09-15", amount: "$2,500.00", status: "Paid" },
    { id: "INV-002", date: "2024-10-01", amount: "$1,500.00", status: "Paid" },
    { id: "INV-003", date: "2024-10-15", amount: "$3,000.00", status: "Pending" },
];

const InvoiceRow = ({ invoice }) => (
    <div className="grid grid-cols-4 items-center gap-4 py-4 px-2 border-b border-white/10 last:border-b-0">
        <div className="font-semibold text-white">{invoice.id}</div>
        <div className="text-sm text-white/70">{invoice.date}</div>
        <div className="text-sm text-white/70">{invoice.amount}</div>
        <div className="text-right">
            <span className={`text-xs font-semibold py-1 px-3 rounded-full ${invoice.status === 'Paid' ? 'bg-green-600/20 text-green-400' : 'bg-yellow-600/20 text-yellow-400'}`}>
                {invoice.status}
            </span>
        </div>
    </div>
);

export default function InvoicesPage() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null; // or a loading spinner
  }

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white">Invoices</h1>
        <p className="text-white/70 mt-1">Your billing history and payment status.</p>
      </div>
      
      <div className="rounded-xl border border-white/10 bg-white/5">
        <div className="grid grid-cols-4 gap-4 py-3 px-2 text-sm font-semibold text-white/60 border-b border-white/10">
            <div>Invoice ID</div>
            <div>Date</div>
            <div>Amount</div>
            <div className="text-right">Status</div>
        </div>
        {invoices.map((invoice) => (
            <InvoiceRow key={invoice.id} invoice={invoice} />
        ))}
      </div>
    </>
  );
}