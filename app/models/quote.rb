class Quote < ApplicationRecord
  belongs_to :company

  after_create_commit -> {broadcast_prepend_to "all_quotes", target: "all_quotes"}
  after_destroy_commit -> {broadcast_remove_to "list_quotes"}

  validates :quote, presence: true
end
