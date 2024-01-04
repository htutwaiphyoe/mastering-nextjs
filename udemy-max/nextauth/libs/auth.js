import bcrypt from "bcrypt";

export async function hashPassword(password) {
    return await bcrypt.hash(password, 12);
}

export async function verifyPassword(enteredPassword, hashedPassword) {
    return await bcrypt.compare(enteredPassword, hashedPassword);
}
