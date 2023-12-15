import axios from "axios";
import { useEffect, useState } from "react";

const ShowList = (props: any) => {
  const [user, setUser] = useState<any[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/aliens").then((res) => setUser(res.data));
  }, []);

  return (
    <div>
      {user.map((alien) => {
        return (
          <div>
            <p>{alien.email}</p>
            <p>{alien.pass}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ShowList;
