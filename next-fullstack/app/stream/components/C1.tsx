import { setTimeout } from 'node:timers/promises';

export default async function C1() {
  await setTimeout(5_000);
  return (
    <>
      <h2>This is C1</h2>
    </>
  );
}
