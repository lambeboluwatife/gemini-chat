const handleSubmit = async (e) => {
  e.preventDefault();
  if (!input.trim()) return;

  const userMessage = { role: "user", content: input };

  setMessages((prev) => [...prev, userMessage]);

  chat.history.push({
    role: "user",
    parts: [{ text: input }],
  });

  setInput("");
  setIsLoading(true);

  try {
    const result = await chat.sendMessage(input);

    const modelMessage = {
      role: "model",
      content: result.response.text() || "I'm sorry, I don't understand that.",
    };

    setMessages((prev) => [...prev, modelMessage]);

    chat.history.push({
      role: "model",
      parts: [{ text: modelMessage.content }],
    });
    console.log(chat.history);
  } catch (error) {
    console.error("Error sending message:", error);
  } finally {
    setIsLoading(false);
  }
};
