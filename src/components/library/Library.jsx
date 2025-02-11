import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { FaPlus } from "react-icons/fa";

const Library = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("https://api.deezer.com/chart/0/tracks")
      .then((res) => res.json())
      .then((data) => {
        console.log('data',data);
        setSongs(data.data || []);
      })
      .catch((err) => console.error("Error fetching songs:", err));
  }, []);

  return (
    <Card
      title="Recent Songs"
      bordered={false}
      style={{ width: "414px", height: "400px", background: "#121212" }}
      headStyle={{ color: "white" }}
      bodyStyle={{ color: "white", padding: 0 }}
      extra={<FaPlus color="white" />}
    >
      <div style={{ maxHeight: "320px", overflowY: "auto", padding: "10px" }}>
        <ul
          style={{ listStyle: "none", padding: 0, margin: 0, color: "white" }}
        >
          {songs.length > 0 ? (
            songs.map((song) => (
              <li
                key={song.id}
                style={{ padding: "8px 0", borderBottom: "1px solid gray" }}
              >
                <strong>{song.title}</strong> - {song.artist.name} (
                {Math.floor(song.duration / 60)}:{song.duration % 60})
              </li>
            ))
          ) : (
            <li>Loading...</li>
          )}
        </ul>
      </div>
    </Card>
  );
};

export default Library;
