# Run with rake new_messages:pull

namespace :new_messages do
  desc "pull new messages from the database"
  task pull: :environment do
    messages_count = Message.count

    while 1 do
      new_message = messages_count != Message.count
      if new_message
        puts Message.last.content
        messages_count = Message.count
      end
      sleep 5
    end
  end
end