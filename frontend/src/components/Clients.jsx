import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
        >
          <img
            src={client.logo}
            alt={client.name}
            className="sm:w-[192px] w-[100px] object-contain rounded-lg bg-gray-100 dark:bg-white/5 p-3 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
