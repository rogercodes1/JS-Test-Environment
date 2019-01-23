require "pry"


def crawl_instagram_graph(seed_instagram_id)
    res = "/account/#{seed_instagram_id}"
    insta_person;
    newArr = []
    binding.pry
    if (res.follower_count >=5000)
      count = 1
      until newReq.next_page_cursor == null do
        newReq = res + "followers?cursor=#{count}"
        newArr << newReq.data
        count++1
      end
      InstagramAccount.new(
        res.instagram_id, res.username, res.biography, res.follower_count, res.followers
      )

    end
    return newArr  # TODO: Your Task

end

class InstagramAccount

 attr_accessor :instagram_id, :username, :biography, :follower_count,:followers

ALL = []
  def initialize(instagram_id, username, biography, follower_count, followers)
    @instagram_id = instagram_id
    @username = username
    @biography = biography
    @follower_count = follower_count
    @followers = followers
    ALL << self
  end

  def self.all
    ALL
  end

end

seed_instagram_id = "hi"
getStr = "/account/#{seed_instagram_id}"

# getObj = {
#   instagram_id: "<string>",
#   username: "<string>",
#   biography: "<string>",
#   follower_count: "<integer>"
# }​
crawl_instagram_graph("socal_corgi")
