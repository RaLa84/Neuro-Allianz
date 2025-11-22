import React from 'react';
import { NavItem, FeaturePoint, SolutionPoint } from './types';
import { School, MessageSquareWarning, Copy, BookOpen, Layout, ShieldCheck } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Das Problem', href: '#problem' },
  { label: 'Unsere Lösung', href: '#solution' },
  { label: 'Über Uns', href: '#about' },
];

export const CONTENT = {
  hero: {
    headlinePart1: "Ihr Kind passt nicht ins System?",
    headlinePart2: "Dann ändern wir das System.",
    subheadline: "Für eine echte Inklusion von Kindern mit Autismus und ADHS in Mecklenburg-Vorpommern. Gegen Ignoranz und Bürokratie. Für Bildung, die niemanden zurücklässt.",
    ctaPrimary: "Stimme erheben",
    ctaSecondary: "Unsere Geschichte",
  },
  problem: {
    headline: "Die Realität in Mecklenburg-Vorpommern",
    subheadline: "Wir lieben unsere Kinder. Aber wir kämpfen täglich gegen Windmühlen. So sieht der Alltag für viele Familien mit neurodivergenten Kindern aus:",
    points: [
      {
        title: "Systemversagen Schule",
        description: "Teilzeitunterricht statt Inklusion. Suspendierungen statt pädagogischer Lösungen. Unsere Kinder werden oft als „unbeschulbar“ abgestempelt, weil das System zu starr für ihre Bedürfnisse ist.",
        icon: <School className="w-8 h-8 text-rose-500" />,
      },
      {
        title: "Das Eltern-Bashing",
        description: "„Sie müssen nur konsequenter sein.“ Statt Unterstützung erhalten Eltern Vorwürfe. Die Schuld für neurobiologische Besonderheiten wird bei der Erziehung gesucht, während Hilferufe ignoriert werden.",
        icon: <MessageSquareWarning className="w-8 h-8 text-rose-500" />,
      },
      {
        title: "Das Bürokratiemonster",
        description: "Ein entwürdigender Kampf um Schulbegleiter und Nachteilsausgleiche. Monatelanges Warten auf Bescheide, während das Kind zu Hause leidet und die Eltern am Rande des Burnouts stehen.",
        icon: <Copy className="w-8 h-8 text-rose-500" />,
      }
    ] as FeaturePoint[],
  },
  solution: {
    headline: "Unsere Forderungen: ",
    headlineHighlight: "Klar. Machbar. Notwendig.",
    subheadline: "Wir fordern keine Sonderbehandlung, sondern Chancengleichheit. Ein inklusives MV ist möglich, wenn der politische Wille da ist.",
    points: [
      {
        title: "Neuro-Kompetenz in jede Schule",
        description: "Verpflichtende Fortbildungen zu Autismus und ADHS für alle Lehrkräfte und Erzieher. Weg vom „Störfaktor“-Denken hin zu pädagogischem Verständnis für Neurodivergenz.",
        icon: <BookOpen className="w-6 h-6 text-slate-900" />
      },
      {
        title: "Flexible Lernorte statt Einheitsbrei",
        description: "Schulen brauchen Rückzugsräume und flexible Konzepte. Ein Kind im Overload kann nicht lernen. Wir fordern bauliche und strukturelle Anpassungen, die Reizüberflutung reduzieren.",
        icon: <Layout className="w-6 h-6 text-slate-900" />
      },
      {
        title: "Unabhängige Ombudsstelle",
        description: "Eine neutrale Instanz mit Entscheidungsgewalt, an die sich Eltern wenden können, wenn Schulen die Inklusion verweigern oder Schulbegleitung willkürlich gekürzt wird.",
        icon: <ShieldCheck className="w-6 h-6 text-slate-900" />
      }
    ] as SolutionPoint[],
  },
  about: {
    headline: "Ich bin Vater, kein Bittsteller.",
    text: [
      "Als mein Sohn die Diagnose Autismus erhielt, dachte ich, wir bekommen Hilfe. Stattdessen bekamen wir Papierkram, Ablehnung und das Gefühl, dass unser Kind im Bildungssystem von MV \"stört\".",
      "Ich habe Stunden in Wartezimmern verbracht und Nächte damit, Widersprüche gegen Behördenentscheidungen zu schreiben. Ich sah, wie mein intelligenter, fröhlicher Junge seine Lebensfreude verlor, weil er nicht in das starre Raster passte.",
      "**Damit ist jetzt Schluss.** Ich habe die Neuro-Allianz gegründet, weil ich weiß, dass wir viele sind. Tausende Familien in Mecklenburg-Vorpommern erleben dasselbe. Wenn wir uns vernetzen, können sie uns nicht länger ignorieren.",
      "**Wir verwandeln unsere Erschöpfung in politische Schlagkraft.**",
      "Raik Lasner, Gründer der Initiative"
    ],
    author: "Raik Lasner, Initiator",
    image: "https://picsum.photos/600/800?grayscale"
  },
  cta: {
    headline: "Lassen Sie uns nicht länger leise sein.",
    text: "Die Politik reagiert nur auf Druck. Wir brauchen Zahlen. Wir brauchen Sie. Tragen Sie sich ein, um über Aktionen, Treffen und Fortschritte informiert zu werden.",
    highlightText: "Gemeinsam sind wir eine Wählermacht.",
    button: "Jetzt dabei sein",
    placeholder: "Ihre E-Mail-Adresse",
    spamWarning: "Kein Spam. Nur relevante Infos zur Initiative. Abmeldung jederzeit möglich."
  }
};
