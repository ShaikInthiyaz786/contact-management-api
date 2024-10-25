// app/api/contact/route.js

import { NextResponse } from "next/server";
import { authenticateToken } from "../../middleware/authMiddleware"; // Adjusted path
import Contact from "../../models/contact"; // Adjust the path as necessary

export async function POST(req) {
  const user = authenticateToken(req);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { name, email, phoneNumber, address, timezone } = await req.json();

  try {
    const contact = await Contact.create({
      userId: user.userId,
      name,
      email,
      phoneNumber,
      address,
      timezone,
    });
    return NextResponse.json(contact, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }
}

// ... (other methods remain unchanged)
