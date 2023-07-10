require "socket"

def listen_app_messages
  puts "APP - Listening for app messages…"
  last_message_id = Message.last.id

  while 1
    new_last_message_id = Message.last.id
    has_new_message = last_message_id != new_last_message_id
    if has_new_message
      puts Message.last.content
      last_message_id = new_last_message_id
    end
    sleep 5
  end
end

def listen_skin_messages
  puts "SKIN - Listening skin for messages…"
  socket = TCPServer.new(4242)

  client = socket.accept
  puts "SKIN - Client connected"

  puts "SKIN - Waiting for request"
  request = client.gets

  puts "SKIN - Request received: #{request}"
end

skin_messages_thread = Thread.new { listen_skin_messages }

app_messages_thread = Thread.new { listen_app_messages }

skin_messages_thread.join
app_messages_thread.join