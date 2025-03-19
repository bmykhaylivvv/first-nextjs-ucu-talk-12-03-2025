'use client';

import { useParams } from 'next/navigation'

export default function Page() {
  const params = useParams();

  return <div>he, new path, {params.id}</div>
} 
