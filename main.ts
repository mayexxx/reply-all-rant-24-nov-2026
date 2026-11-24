import { mkdirSync, writeFileSync } from 'node:fs';

const rant = "Reply-all is not a personality. Every 'thanks!' to four hundred people is a tiny denial-of-service attack on my will to live, and it's always the same four people, like a subscription I never signed up for and cannot cancel.";

if (Array.from(rant).length < 1 || Array.from(rant).length > 400) {
  throw new Error('The rant must contain between 1 and 400 characters');
}

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', rant + '\n', 'utf8');
