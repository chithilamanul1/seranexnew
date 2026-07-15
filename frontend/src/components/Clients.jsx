import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} w-full flex-wrap gap-8 md:gap-16`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} m-5 min-w-[120px] sm:min-w-[192px]`}
        >
          <span className="font-poppins font-bold text-[20px] md:text-[28px] text-dimWhite hover:text-white transition-colors cursor-default">
            {client.name}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
