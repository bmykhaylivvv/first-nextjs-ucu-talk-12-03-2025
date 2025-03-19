"use client";

import { useState, useEffect } from "react";

import PostCard from "./postCard";

import yuliaStyles from "./bohdan-styles.module.css";

export default function Home() {
  return (
    <div className={yuliaStyles.demoClass}>
      <PostCard title="one" firstName="Jack"/>
      <PostCard title="two" />
      <PostCard title="three" />
    </div>
  );
}
