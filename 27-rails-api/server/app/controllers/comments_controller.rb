class CommentsController < ApplicationController
  def index
    @comments = Comment.all
    render json: @comments
  end

  def show
    @comment = Comment.find(params[:id])
    render json: @comment
  end

  def create
    @comment = Comment.new(content: params[:content], image_id: params[:image_id])
    if @comment.save
      render json: @comment
    else
      render json: {error: 'Unable to create comment.'}, status: 400
    end
    # body: JSON.stringify({ content: '', image_id: 1 })
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    puts 'Comment found:', @comment
    if @comment
      @comment.destroy
      render json: {message: 'Comment deleted.'}
    else
      render json: {error: 'Comment not found.'}, status: 404
    end
  end
end
