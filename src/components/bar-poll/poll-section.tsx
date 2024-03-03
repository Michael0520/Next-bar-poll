import { VoteType } from '@/schema/vote';
import React from 'react';
import Options from './options';
import Bars from './bars';

type PollSectionProps = {
  votes: VoteType[];
  setVotes: React.Dispatch<React.SetStateAction<VoteType[]>>;
};

const PollSection: React.FC<PollSectionProps> = ({ votes, setVotes }) => {
  return (
    <section className="bg-slate-900 px-4 py-12 w-full">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-2 md:grid-cols-[1fr_400px] md:gap-12">
        <Options votes={votes} setVotes={setVotes} />
        <Bars votes={votes} />
      </div>
    </section>
  );
};

export default PollSection;
