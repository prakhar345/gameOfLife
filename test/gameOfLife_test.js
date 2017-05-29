var assert = require('assert');
var gameOfLife = require('../src/gameOfLife');


describe('gameOfLife', function(){

	describe('isAlive', function(){
		it('returns 1 when the point is alive', function(){

			var grid = new gameOfLife.grid;
			var point = new gameOfLife.Point(2,2,true);

			grid.addPoint(point);
			assert.equal(1, point.isAlive());

		})
	})
	describe('getPoint', function(){
		it('returns x0y0 when input is 0,0', function(){

			assert.equal("x0y0", gameOfLife.getPoint(0,0));

		})
	})
	describe('addPoint', function(){
		it('adds a point to the grid', function(){
			var grid = new gameOfLife.grid;
			var point = new gameOfLife.Point(2,2,true);

			grid.addPoint(point);

			assert.equal(grid.points.x2y2, point);

		})
	})
	describe('getPointAt', function(){
		it('returns the point at given position', function(){
			var grid = new gameOfLife.grid;
			var point = new gameOfLife.Point(2,2,true);

			grid.addPoint(point);

			assert.equal(grid.getPointAt(2,2), point);

		})
	})
	describe('aliveNeighbours', function(){
		it('returns the number of alive neighbours of a given point', function(){
			var grid = new gameOfLife.grid;
			var point1 = new gameOfLife.Point(0,0,true);
			var point2 = new gameOfLife.Point(0,1,false);
			var point3 = new gameOfLife.Point(0,2,false);
			var point4 = new gameOfLife.Point(1,0,true);
			var point5 = new gameOfLife.Point(1,1,true);
			var point6 = new gameOfLife.Point(1,2,true);
			var point7 = new gameOfLife.Point(2,0,true);
			var point8 = new gameOfLife.Point(2,1,true);
			var point9 = new gameOfLife.Point(2,2,true);

			grid.addPoint(point1);
			grid.addPoint(point2);
			grid.addPoint(point3);
			grid.addPoint(point4);
			grid.addPoint(point5);
			grid.addPoint(point6);
			grid.addPoint(point7);
			grid.addPoint(point8);
			grid.addPoint(point9);

			assert.equal(6,grid.aliveNeighbours(point5));

		})
	})
	describe('next_state', function(){
		it('returns next state of a point', function(){
			var grid = new gameOfLife.grid;
			var point1 = new gameOfLife.Point(0,0,true);
			var point2 = new gameOfLife.Point(0,1,false);
			var point3 = new gameOfLife.Point(0,2,false);
			var point4 = new gameOfLife.Point(1,0,true);
			var point5 = new gameOfLife.Point(1,1,true);
			var point6 = new gameOfLife.Point(1,2,true);
			var point7 = new gameOfLife.Point(2,0,true);
			var point8 = new gameOfLife.Point(2,1,true);
			var point9 = new gameOfLife.Point(2,2,true);

			grid.addPoint(point1);
			grid.addPoint(point2);
			grid.addPoint(point3);
			grid.addPoint(point4);
			grid.addPoint(point5);
			grid.addPoint(point6);
			grid.addPoint(point7);
			grid.addPoint(point8);
			grid.addPoint(point9);

			assert.equal(0,grid.next_state(point5));

		})
	})

})