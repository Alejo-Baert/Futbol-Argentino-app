import SliderTeams from "@/components/SliderTeams"
import videoBg from '../assets/video/video.mp4'

export default function Home() {
  return (
    <main>
      <video
        src={videoBg}
        className="absolute top-0 w-full h-full object-cover"
        type="video/mp4"
        autoPlay
        loop
        muted
      />

      <div className="absolute top-0 left-0 w-full h-full bg-[rgb(0,0,0,.7)]" />

      <SliderTeams />
    </main>
  )
}
