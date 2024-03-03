'use client'

import { VoteType } from '@/schema/vote';
import React, { useState } from 'react';
import PollSection from './poll-section';

const BarPoll: React.FC = () => {
  const [votes, setVotes] = useState<VoteType[]>([
    { title: "Number 1", votes: 1, color: "bg-green-500" },
    { title: "Number 2", votes: 2, color: "bg-green-700" },
    { title: "others", votes: 3, color: "bg-green-900" },
  ]);

  return <PollSection votes={votes} setVotes={setVotes} />;
};

export default BarPoll;
