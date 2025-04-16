import { setTimeout } from 'node:timers/promises';

export default async function C2() {
  await setTimeout(3_000);
  return (
    <>
      <h2>This is C2</h2>
    </>
  );
}
