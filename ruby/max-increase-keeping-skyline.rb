require "pry"
grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]

def max_increase_keeping_skyline(grid)
    largest_lr_num_arr = []
    largest_tb_num_arr = []
#     loop thru array of arrays
#     determine the largest number in the first array and save index.
    grid.each do |arr|
      largest_lr_num_arr << arr.max

      binding.pry

    end

end
max_increase_keeping_skyline(grid)
