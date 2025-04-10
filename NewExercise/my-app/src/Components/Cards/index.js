import Image from "next/image";
import styles from "@/Components/Cards/card.module.css";

const UserCards = ({users}) => {
    return (
        <div className={styles.cards}>
            <Image src={`https://i.pravatar.cc/150?img=${users.id}`} alt={users.name} width={200} height={200}/>
            <h2>User Cards</h2>
            <p>Email: {users.email}</p>
            <p>Address:{users.address.street} city:{users.address.city}</p>

        </div>);
}

export default UserCards;