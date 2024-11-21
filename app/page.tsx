import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="video-background">
        <video autoPlay loop muted className="background-video">
          <source src="/home.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <h1>Welcome to My Website</h1>
          <p>This is the content overlaying the video background.</p>
        </div>
</div>
    </div>
  );
}
