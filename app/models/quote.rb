class Quote < ApplicationRecord

  after_create_commit -> {broadcast_prepend_to "all_quotes"}
  after_destroy_commit -> {broadcast_remove_to "all_quotes"}

  validates :quote, presence: true
end
