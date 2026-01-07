import clientPromise from "../../../../lib/mongodb";

export async function POST(request) {
  const body = await request.json();
  const client = await clientPromise;
  const db = client.db("skibidi");
  const collection = db.collection("url");

  const existing = await collection.findOne({ shorturl: body.shorturl });

  // shorturl already exists
  if (existing) {
    // same shorturl but different original URL
    if (existing.url !== body.url) {
      return Response.json({
        success: false,
        error: true,
        message: "Short URL already taken",
      });
    }

    // same shorturl + same url (optional case)
    return Response.json({
      success: true,
      error: false,
      message: "URL already exists",
    });
  }

  // create new entry
  await collection.insertOne({
    url: body.url,
    shorturl: body.shorturl,
  });

  return Response.json({
    success: true,
    error: false,
    message: "URL generated successfully",
  });
}
