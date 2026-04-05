type AccessLevel = "Admin" | "Player" | "Guest" | "Banned";

function getWelcomeMessage(level: AccessLevel): string {
  switch (level) {
    case "Admin":
      return "Systems online, Administrator.";
    case "Player":
      return "Ready for your next match?";
    case "Guest":
      return "Please create an account to save progress.";
    // What happens if we forget "Banned"?
    default:
      const _exhaustiveCheck: never = level;
      return _exhaustiveCheck;
  }
}

const adminMessage = getWelcomeMessage("Admin");
console.log(adminMessage);

const playerMessage = getWelcomeMessage("Player");
console.log(playerMessage);

const guestMessage = getWelcomeMessage("Guest");
console.log(guestMessage);

const bannedMessage = getWelcomeMessage("Banned");
console.log(bannedMessage);

// In TypeScript, the never type represents a value that should never exist. By trying to assign level (which is now "Banned") to a variable typed as 
// never, you triggered a compiler error. This is a powerful pattern called Exhaustive Checking. It acts as a safety 
// net, ensuring that if you or a teammate add a new user level in the future, the code won't compile until that level is handled.