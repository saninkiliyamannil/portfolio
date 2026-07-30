"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@root/sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
