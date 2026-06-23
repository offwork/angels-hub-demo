"use server";

export const onSubmitAction = async (endpoint: string, data: Record<string, any>) => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });

  await fetch(`https://getform.io/f/${endpoint}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });
};
