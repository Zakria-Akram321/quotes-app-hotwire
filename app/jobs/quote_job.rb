class QuoteJob < ApplicationJob
  queue_as :default

  def perform(*args)
    # Do something later
    sleep(10)
    puts "Quote created successfully"
  end
end
