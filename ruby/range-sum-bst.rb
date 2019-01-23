# Definition for a binary tree node.
class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val)
        @val = val
        @left, @right = nil, nil
    end
end

# @param {TreeNode} root
# @param {Integer} l
# @param {Integer} r
# @return {Integer}
def range_sum_bst(root, l, r)
    sum = 0
    while !root.nil?
        puts "currSum#{sum}"
        puts root.val
        puts root
        if l <= root.val && root.val >= r
            sum += root.val
        end
        if l < root.val
            root = root.left
        end
        if r > root.val
            root = root.right
        end
    end
   puts "SUM: #{sum}"
    sum
end

# Example 1:

# Input:
root = [10,5,15,3,7,null,18], L = 7, R = 15
Output= 32

# Example 2:
# Input:
root2 = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output2 = 23
