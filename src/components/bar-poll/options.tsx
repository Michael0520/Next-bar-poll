'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { VoteType } from '@/schema/vote';
import { Button } from '../ui/button';

type OptionsProps = {
  votes: VoteType[];
  setVotes: React.Dispatch<React.SetStateAction<VoteType[]>>;
};

const Options: React.FC<OptionsProps> = ({ votes, setVotes }) => {
  const totalVotes = votes.reduce((acc, vote) => acc + vote.votes, 0);

  return (
    <div className="col-span-1 py-12">
      <h3 className="mb-6 text-3xl font-semibold text-slate-50">
        What&apos;s your opinion?
      </h3>
      <div className="mb-6 space-y-2">
        {votes.map((vote) => (
          <motion.button
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            onClick={() => setVotes(prev => prev.map(v => v.title === vote.title ? { ...v, votes: v.votes + 1 } : v))}
            key={vote.title}
            className={`w-full rounded-md ${vote.color} py-2 font-medium text-white`}
          >
            {vote.title}
          </motion.button>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span className="mb-2 italic text-slate-400">{totalVotes} votes</span>
        <Button

          variant="outline"
          onClick={() => setVotes(prev => prev.map(vote => ({ ...vote, votes: 0 })))}
          className="rounded-md bg-slate-700 px-4 py-3 text-sm font-medium text-slate-200"
        >
          Reset count
        </Button>
      </div>
    </div>
  );
};

export default Options;
