require "socket"

socket = TCPServer.new(4242)
puts "Server started"

client = socket.accept
puts "Client connected"

puts "Waiting for request"
request = client.gets

puts "Request received"
puts request
