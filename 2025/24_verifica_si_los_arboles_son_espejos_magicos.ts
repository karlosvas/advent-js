function isTreesSynchronized(
  tree1: { value: string; left?: any; right?: any } | undefined,
  tree2: { value: string; left?: any; right?: any } | undefined
): [boolean, string] {
  function areMirrors(n1: any, n2: any): boolean {
    if (!n1 && !n2) return true;
    if (!n1 || !n2 || n1.value !== n2.value) return false;
    return areMirrors(n1.left, n2.right) && areMirrors(n1.right, n2.left);
  }

  return [areMirrors(tree1, tree2), tree1?.value || tree2?.value || ""];
}
