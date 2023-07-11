require 'socket'

def listen_app_messages
  puts 'APP - Listening for app messages…'
  last_message_id = Message.last.id

  while 1
    new_last_message_id = Message.last.id
    has_new_message = last_message_id != new_last_message_id
    if has_new_message
      socket = UDPSocket.new
      socket.send(Message.last.content, 0, '192.168.27.77', 3001)
      puts Message.last.content
      last_message_id = new_last_message_id
      # send message to robotic arm
    end
    sleep 5
  end
end

def listen_skin_messages
  mock_message_received = {
    'pos-29': {
      x: 74,
      y: 60,
      millis: 34_320,
    },
    'pos-39': {
      x: 61,
      y: 98,
      millis: 34_485,
    },
    'pos-38': {
      x: 66,
      y: 83,
      millis: 34_470,
    },
    'pos-159': {
      x: 144,
      y: 70,
      millis: 36_909,
    },
    'pos-37': {
      x: 66,
      y: 83,
      millis: 34_451,
    },
    'pos-36': {
      x: 70,
      y: 74,
      millis: 34_437,
    },
    'pos-35': {
      x: 70,
      y: 74,
      millis: 34_419,
    },
    'pos-156': {
      x: 158,
      y: 75,
      millis: 36_859,
    },
    'pos-34': {
      x: 70,
      y: 74,
      millis: 34_402,
    },
    'pos-155': {
      x: 162,
      y: 77,
      millis: 36_843,
    },
    'pos-33': {
      x: 73,
      y: 68,
      millis: 34_386,
    },
    'pos-158': {
      x: 144,
      y: 70,
      millis: 36_892,
    },
    'pos-32': {
      x: 73,
      y: 68,
      millis: 34_370,
    },
    'pos-157': {
      x: 158,
      y: 75,
      millis: 36_876,
    },
    'pos-31': {
      x: 73,
      y: 68,
      millis: 34_353,
    },
    'pos-152': {
      x: 166,
      y: 86,
      millis: 36_793,
    },
    'pos-30': {
      x: 74,
      y: 60,
      millis: 34_337,
    },
    'pos-151': {
      x: 166,
      y: 86,
      millis: 36_778,
    },
    'pos-154': {
      x: 162,
      y: 77,
      millis: 36_826,
    },
    'pos-153': {
      x: 162,
      y: 77,
      millis: 36_809,
    },
    'pos-150': {
      x: 166,
      y: 86,
      millis: 36_762,
    },
    'pos-19': {
      x: 104,
      y: 54,
      millis: 34_140,
    },
    'pos-18': {
      x: 129,
      y: 65,
      millis: 34_053,
    },
    'pos-28': {
      x: 74,
      y: 60,
      millis: 34_304,
    },
    'pos-27': {
      x: 78,
      y: 52,
      millis: 34_287,
    },
    'pos-26': {
      x: 78,
      y: 52,
      millis: 34_271,
    },
    'pos-25': {
      x: 91,
      y: 49,
      millis: 34_244,
    },
    'pos-24': {
      x: 91,
      y: 49,
      millis: 34_227,
    },
    'pos-23': {
      x: 101,
      y: 50,
      millis: 34_205,
    },
    'pos-166': {
      x: 138,
      y: 62,
      millis: 37_024,
    },
    'pos-22': {
      x: 101,
      y: 50,
      millis: 34_190,
    },
    'pos-21': {
      x: 101,
      y: 50,
      millis: 34_173,
    },
    'pos-20': {
      x: 104,
      y: 54,
      millis: 34_156,
    },
    'pos-163': {
      x: 140,
      y: 66,
      millis: 36_977,
    },
    'pos-162': {
      x: 140,
      y: 66,
      millis: 36_960,
    },
    'pos-165': {
      x: 138,
      y: 62,
      millis: 37_009,
    },
    'pos-164': {
      x: 138,
      y: 62,
      millis: 36_992,
    },
    'pos-161': {
      x: 140,
      y: 66,
      millis: 36_943,
    },
    'pos-160': {
      x: 144,
      y: 70,
      millis: 36_929,
    },
    'pos-17': {
      x: 129,
      y: 65,
      millis: 34_037,
    },
    'pos-16': {
      x: 133,
      y: 66,
      millis: 34_022,
    },
    'pos-15': {
      x: 133,
      y: 66,
      millis: 33_993,
    },
    'pos-14': {
      x: 136,
      y: 72,
      millis: 33_976,
    },
    'pos-13': {
      x: 136,
      y: 72,
      millis: 33_958,
    },
    'pos-12': {
      x: 136,
      y: 72,
      millis: 33_940,
    },
    'pos-11': {
      x: 137,
      y: 74,
      millis: 33_924,
    },
    'pos-99': {
      x: 155,
      y: 173,
      millis: 35_687,
    },
    'pos-10': {
      x: 137,
      y: 74,
      millis: 33_908,
    },
    'pos-98': {
      x: 155,
      y: 173,
      millis: 35_672,
    },
    'pos-97': {
      x: 141,
      y: 182,
      millis: 35_655,
    },
    'pos-96': {
      x: 129,
      y: 180,
      millis: 35_553,
    },
    'pos-95': {
      x: 129,
      y: 180,
      millis: 35_536,
    },
    'pos-94': {
      x: 119,
      y: 176,
      millis: 35_520,
    },
    'pos-93': {
      x: 119,
      y: 176,
      millis: 35_504,
    },
    'pos-92': {
      x: 119,
      y: 176,
      millis: 35_487,
    },
    'pos-9': {
      x: 137,
      y: 75,
      millis: 33_891,
    },
    'pos-91': {
      x: 113,
      y: 178,
      millis: 35_471,
    },
    'pos-90': {
      x: 113,
      y: 178,
      millis: 35_456,
    },
    'pos-105': {
      x: 160,
      y: 172,
      millis: 35_786,
    },
    'pos-104': {
      x: 160,
      y: 172,
      millis: 35_769,
    },
    'pos-107': {
      x: 160,
      y: 170,
      millis: 35_819,
    },
    'pos-106': {
      x: 160,
      y: 170,
      millis: 35_802,
    },
    'pos-101': {
      x: 159,
      y: 173,
      millis: 35_721,
    },
    'pos-89': {
      x: 113,
      y: 178,
      millis: 35_439,
    },
    'pos-100': {
      x: 155,
      y: 173,
      millis: 35_704,
    },
    'pos-88': {
      x: 113,
      y: 179,
      millis: 35_422,
    },
    'pos-103': {
      x: 160,
      y: 172,
      millis: 35_754,
    },
    'pos-87': {
      x: 113,
      y: 179,
      millis: 35_406,
    },
    'pos-102': {
      x: 159,
      y: 173,
      millis: 35_736,
    },
    'pos-86': {
      x: 113,
      y: 179,
      millis: 35_388,
    },
    'pos-85': {
      x: 110,
      y: 178,
      millis: 35_372,
    },
    'pos-84': {
      x: 110,
      y: 178,
      millis: 35_356,
    },
    'pos-83': {
      x: 106,
      y: 180,
      millis: 35_340,
    },
    'pos-82': {
      x: 106,
      y: 180,
      millis: 35_310,
    },
    'pos-81': {
      x: 101,
      y: 172,
      millis: 35_294,
    },
    'pos-80': {
      x: 101,
      y: 172,
      millis: 35_276,
    },
    'pos-109': {
      x: 161,
      y: 169,
      millis: 35_851,
    },
    'pos-108': {
      x: 160,
      y: 170,
      millis: 35_834,
    },
    'pos-116': {
      x: 161,
      y: 170,
      millis: 35_967,
    },
    'pos-115': {
      x: 161,
      y: 170,
      millis: 35_951,
    },
    'pos-118': {
      x: 160,
      y: 169,
      millis: 36_003,
    },
    'pos-117': {
      x: 160,
      y: 169,
      millis: 35_985,
    },
    'pos-79': {
      x: 101,
      y: 172,
      millis: 35_261,
    },
    'pos-112': {
      x: 162,
      y: 170,
      millis: 35_901,
    },
    'pos-78': {
      x: 96,
      y: 170,
      millis: 35_243,
    },
    'pos-111': {
      x: 161,
      y: 169,
      millis: 35_884,
    },
    'pos-77': {
      x: 96,
      y: 170,
      millis: 35_226,
    },
    'pos-114': {
      x: 161,
      y: 170,
      millis: 35_934,
    },
    'pos-76': {
      x: 96,
      y: 170,
      millis: 35_210,
    },
    'pos-113': {
      x: 162,
      y: 170,
      millis: 35_917,
    },
    'pos-75': {
      x: 92,
      y: 169,
      millis: 35_192,
    },
    'pos-74': {
      x: 92,
      y: 169,
      millis: 35_176,
    },
    'pos-73': {
      x: 93,
      y: 169,
      millis: 35_160,
    },
    'pos-110': {
      x: 161,
      y: 169,
      millis: 35_868,
    },
    'pos-72': {
      x: 80,
      y: 169,
      millis: 35_143,
    },
    'pos-71': {
      x: 80,
      y: 169,
      millis: 35_127,
    },
    'pos-70': {
      x: 77,
      y: 167,
      millis: 35_112,
    },
    'pos-7': {
      x: 138,
      y: 75,
      millis: 33_860,
    },
    'pos-8': {
      x: 138,
      y: 75,
      millis: 33_875,
    },
    'pos-5': {
      x: 139,
      y: 76,
      millis: 33_829,
    },
    'pos-6': {
      x: 139,
      y: 76,
      millis: 33_844,
    },
    'pos-3': {
      x: 163,
      y: 101,
      millis: 33_652,
    },
    'pos-4': {
      x: 139,
      y: 76,
      millis: 33_812,
    },
    'pos-1': {
      x: 163,
      y: 104,
      millis: 33_589,
    },
    'pos-2': {
      x: 163,
      y: 104,
      millis: 33_620,
    },
    'pos-0': {
      x: 162,
      y: 106,
      millis: 33_568,
    },
    'pos-119': {
      x: 161,
      y: 171,
      millis: 36_031,
    },
    'pos-127': {
      x: 168,
      y: 160,
      millis: 36_215,
    },
    'pos-126': {
      x: 165,
      y: 162,
      millis: 36_199,
    },
    'pos-129': {
      x: 168,
      y: 160,
      millis: 36_249,
    },
    'pos-69': {
      x: 77,
      y: 167,
      millis: 35_095,
    },
    'pos-128': {
      x: 168,
      y: 160,
      millis: 36_234,
    },
    'pos-68': {
      x: 77,
      y: 167,
      millis: 35_079,
    },
    'pos-123': {
      x: 164,
      y: 165,
      millis: 36_151,
    },
    'pos-67': {
      x: 74,
      y: 163,
      millis: 35_062,
    },
    'pos-122': {
      x: 164,
      y: 165,
      millis: 36_135,
    },
    'pos-66': {
      x: 74,
      y: 163,
      millis: 35_048,
    },
    'pos-125': {
      x: 165,
      y: 162,
      millis: 36_183,
    },
    'pos-65': {
      x: 74,
      y: 163,
      millis: 35_029,
    },
    'pos-124': {
      x: 165,
      y: 162,
      millis: 36_167,
    },
    'pos-64': {
      x: 72,
      y: 161,
      millis: 35_013,
    },
    'pos-63': {
      x: 72,
      y: 160,
      millis: 34_982,
    },
    'pos-62': {
      x: 69,
      y: 160,
      millis: 34_965,
    },
    'pos-121': {
      x: 161,
      y: 171,
      millis: 36_064,
    },
    'pos-61': {
      x: 69,
      y: 160,
      millis: 34_949,
    },
    'pos-120': {
      x: 161,
      y: 171,
      millis: 36_048,
    },
    'pos-60': {
      x: 65,
      y: 158,
      millis: 34_930,
    },
    'pos-138': {
      x: 185,
      y: 153,
      millis: 36_397,
    },
    'pos-137': {
      x: 174,
      y: 153,
      millis: 36_381,
    },
    'pos-59': {
      x: 65,
      y: 158,
      millis: 34_914,
    },
    'pos-58': {
      x: 65,
      y: 158,
      millis: 34_898,
    },
    'pos-139': {
      x: 171,
      y: 103,
      millis: 36_580,
    },
    'pos-57': {
      x: 51,
      y: 154,
      millis: 34_882,
    },
    'pos-134': {
      x: 176,
      y: 153,
      millis: 36_331,
    },
    'pos-56': {
      x: 51,
      y: 154,
      millis: 34_865,
    },
    'pos-133': {
      x: 176,
      y: 153,
      millis: 36_314,
    },
    'pos-55': {
      x: 51,
      y: 154,
      millis: 34_848,
    },
    'pos-136': {
      x: 174,
      y: 153,
      millis: 36_364,
    },
    'pos-54': {
      x: 49,
      y: 154,
      millis: 34_833,
    },
    'pos-135': {
      x: 174,
      y: 153,
      millis: 36_347,
    },
    'pos-53': {
      x: 50,
      y: 153,
      millis: 34_731,
    },
    'pos-130': {
      x: 177,
      y: 157,
      millis: 36_265,
    },
    'pos-52': {
      x: 50,
      y: 153,
      millis: 34_714,
    },
    'pos-51': {
      x: 48,
      y: 142,
      millis: 34_697,
    },
    'pos-132': {
      x: 176,
      y: 153,
      millis: 36_299,
    },
    'pos-50': {
      x: 48,
      y: 142,
      millis: 34_681,
    },
    'pos-131': {
      x: 177,
      y: 157,
      millis: 36_282,
    },
    'pos-149': {
      x: 167,
      y: 86,
      millis: 36_745,
    },
    'pos-49': {
      x: 48,
      y: 142,
      millis: 34_665,
    },
    'pos-148': {
      x: 167,
      y: 86,
      millis: 36_729,
    },
    'pos-48': {
      x: 48,
      y: 131,
      millis: 34_648,
    },
    'pos-47': {
      x: 48,
      y: 131,
      millis: 34_632,
    },
    'pos-46': {
      x: 48,
      y: 114,
      millis: 34_602,
    },
    'pos-145': {
      x: 169,
      y: 93,
      millis: 36_679,
    },
    'pos-45': {
      x: 48,
      y: 114,
      millis: 34_584,
    },
    'pos-144': {
      x: 170,
      y: 97,
      millis: 36_663,
    },
    'pos-44': {
      x: 53,
      y: 106,
      millis: 34_567,
    },
    'pos-147': {
      x: 167,
      y: 86,
      millis: 36_712,
    },
    'pos-43': {
      x: 53,
      y: 106,
      millis: 34_551,
    },
    'pos-146': {
      x: 169,
      y: 93,
      millis: 36_697,
    },
    'pos-42': {
      x: 53,
      y: 106,
      millis: 34_535,
    },
    'pos-141': {
      x: 171,
      y: 103,
      millis: 36_613,
    },
    'pos-41': {
      x: 61,
      y: 98,
      millis: 34_518,
    },
    'pos-140': {
      x: 171,
      y: 103,
      millis: 36_596,
    },
    'pos-40': {
      x: 61,
      y: 98,
      millis: 34_502,
    },
    'pos-143': {
      x: 170,
      y: 98,
      millis: 36_646,
    },
    'pos-142': {
      x: 170,
      y: 98,
      millis: 36_630,
    },
  }

  puts 'SKIN - Listening skin for messages…'
  socket = UDPSocket.new
  socket.bind('0.0.0.0', 3001)
  puts 'SKIN - Client connected'

  while 1
    puts 'SKIN - Waiting for request'
    received_message = socket.recvfrom(60_000).first
    received_message = mock_message_received
    puts "SKIN - Message received: #{received_message}"

    # create an array of mock_message_received values sorted by position
    formatted_message = received_message.sort_by { |_, v| v[:millis] }.map { |_, v| v }
    message = Message.create!(content: formatted_message, user_type: 'device')
    # listen_app_messages.thread_variable_set(:last_message_id, message.id)
  end
end

skin_messages_thread = Thread.new { listen_skin_messages }

app_messages_thread = Thread.new { listen_app_messages }

skin_messages_thread.join
app_messages_thread.join
