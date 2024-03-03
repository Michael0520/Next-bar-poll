import BarPoll from "@/components/bar-poll";
import { ModeToggle } from "@/components/darkmode";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center container mx-auto gap-4">
      <div className='flex justify-end items-end w-full'>
        <ModeToggle />
      </div>
      <BarPoll/>
    </main>
  );
}
