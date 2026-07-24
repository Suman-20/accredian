export async function POST(request) {
  const body = await request.json();

  console.log("Form Data:", body);

  return Response.json({
    success: true,
    message: "Enquiry submitted successfully",
  });
}