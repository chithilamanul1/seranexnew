import React from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";

const Products = () => (
    <div className="w-full overflow-hidden bg-primary text-white min-h-screen flex flex-col justify-between">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} flex-grow`}>
            <div className={`${styles.boxWidth} py-20`}>
                <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full mb-6">
                    Our Products
                </h1>
                <p className={`${styles.paragraph} max-w-[800px] mb-10`}>
                    We build ready-to-use software products that solve common business problems instantly.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="p-8 rounded-2xl bg-black-gradient border border-gray-800">
                        <h3 className="text-2xl font-bold mb-4 text-secondary">Smart CRM</h3>
                        <p className="text-dimWhite">
                            A super simple customer relationship management tool designed for small and medium businesses. Track leads, manage contacts, and close deals without the complexity of Salesforce.
                        </p>
                    </div>
                    <div className="p-8 rounded-2xl bg-black-gradient border border-gray-800">
                        <h3 className="text-2xl font-bold mb-4 text-secondary">AutoInvoice</h3>
                        <p className="text-dimWhite">
                            Automatically generate, send, and track invoices. Connects directly with your bank account and accounting software to save hours of manual work.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Footer />
            </div>
        </div>
    </div>
);

export default Products;
