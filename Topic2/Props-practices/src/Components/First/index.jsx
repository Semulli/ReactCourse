import Title from "../title";
import Second from "../second";

function First() {
  const personInfo = {
    fullName: "John Doe",
    age: 30,
    email: "john@gmail.com",
    phoneNumber: "+994553505050",
    married: true,
    hobbies: ["Reading", "Gaming", "Traveling"],
  };
  return (
    <>
      <div className="parent main">
        <Title color="blue" variant="title1">
          this is the first component
        </Title>
        <h2>fullName: {personInfo.fullName}</h2>
        <h2>Age: {personInfo.age}</h2>

        
        <Second personInfo={personInfo} />
      </div>
    </>
  );
}

export default First;
