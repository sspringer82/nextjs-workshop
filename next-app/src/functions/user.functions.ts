'use server';
export async function doItAction(who: string) {
  console.log('Hello ' + who);
}

export async function doSomethingElseAction() {
  console.log('do Something Else');
}
