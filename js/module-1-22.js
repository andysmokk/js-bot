function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === "pro" || subType === "vip"; // Change this line

    console.log(canAccessContent)
  return canAccessContent;
}

checkIfCanAccessContent("pro")
checkIfCanAccessContent("starter")
checkIfCanAccessContent("vip")
checkIfCanAccessContent("free")

