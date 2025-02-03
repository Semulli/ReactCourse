import Card from "./card";

import style from "./home.module.css"
export default function Home(){
    return (
        <div className={style.home}>
        <h1>Main Component</h1>
        <Card/>
        </div>
    )
}