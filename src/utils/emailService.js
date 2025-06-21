import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_fgnhywf';
const TEMPLATE_ID = 'template_qavfupc';
const PUBLIC_KEY = 'isELK9t-ib6mHdKFU';

export const sendEnquiryEmail = async (item) => {
  console.log("📨 Sending enquiry with:", item);

  const templateParams = {
    item_name: item.name,
    item_type: item.type,
    item_description: item.description,
    name: item.name || "User",
    email: item.email || "test@example.com"
  };

  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    console.log("✅ Email sent successfully:", response.status, response.text);
    return true;
  } catch (error) {
    console.error("❌ EmailJS Error:", error);
    return false;
  }
};