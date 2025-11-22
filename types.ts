import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeaturePoint {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface SolutionPoint {
  title: string;
  description: string;
  icon: React.ReactNode;
}