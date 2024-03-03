'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { VoteType } from '@/schema/vote';

interface BarsProps {
  votes: VoteType[];
}

const Bars: React.FC<BarsProps> = ({ votes }) => {
  const totalVotes = votes.reduce((acc, vote) => acc + vote.votes, 0);

  return (
    <div className="col-span-1 grid min-h-[200px] gap-2" style={{ gridTemplateColumns: `repeat(${votes.length}, minmax(0, 1fr))` }}>
      {votes.map((vote) => {
        const height = totalVotes > 0 ? `${(vote.votes / totalVotes) * 100}%` : '0%';
        return (
          <div key={vote.title} className="col-span-1">
            <div className="relative flex h-full w-full items-end overflow-hidden rounded-2xl bg-gradient-to-b from-slate-700 to-slate-800">
              <motion.div
                animate={{ height: height }}
                className={`relative z-0 w-full ${vote.color}`}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              />
              <span className="absolute bottom-0 left-[50%] translate-x-[-50%] mb-2 inline-block w-full p-2 text-center text-sm text-slate-50">
                <b>{vote.title}</b><br />
                <span className="text-xs text-slate-200">{vote.votes} votes</span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Bars;
