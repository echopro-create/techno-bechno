'use client';

import { useState, use } from 'react';

const yearPromise = Promise.resolve(String(new Date().getFullYear()));

export function CopyrightYear() {
  const year = use(yearPromise);
  return <>{year}</>;
}
