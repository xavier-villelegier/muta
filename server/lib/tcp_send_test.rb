require "socket"

puts "Client started"
server = TCPSocket.open("localhost", 4242)

puts "Client connected"
request = "Hello, server!"
server.puts(request)

response = server.gets

puts response
