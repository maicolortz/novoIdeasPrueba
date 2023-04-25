import { useState, useEffect } from "react";

function Chat() {
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    const fetchChatData = async () => {
      try {
        const response = await fetch(
          "https://pbakxq15qi.execute-api.us-west-2.amazonaws.com/testing?user=admin&password=admin"
        );
        const data = await response.json();
        setChatData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchChatData();
  }, []);

  return (
    <div>
      {chatData.map((message) => (
        <div key={message.id}>
          <p>
            <strong> {message.sender}</strong>: {message.message}
          </p>
        </div>
      ))}
    </div>
  );
}
export default Chat;
