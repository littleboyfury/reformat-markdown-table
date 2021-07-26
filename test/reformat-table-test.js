'use strict';

const expect = require('chai').expect,
  reformatReadmeDoc = require('../lib/reformat-table.js');


describe('reformat-table', function () {

  it('should reformat a markdown table 1', function () {
    const input = [
        '| Header 1 |   Header 2   | Header 3|H|',
        '| --- | --- | :---: | :---: |',
        '| aaa |bbb| cccc | ddd |',
        '   |   eee |fff'
      ].join('\n'),
      output = [
        '| Header 1 | Header 2 | Header 3 |   H   |',
        '|----------|----------|:--------:|:-----:|',
        '| aaa      | bbb      |   cccc   |  ddd  |',
        '| eee      | fff      |          |       |'
      ].join('\n');

    expect(reformatReadmeDoc(input, {})).to.eql(output);
  });

  it('should reformat a markdown table 2', function () {
    const input = [
        '| 姓名 | 电话 | 邮箱 |',
        '| --- | :---: | ---: |',
        '| 王顶 | 13582027613 | 408542507@qq.com |',
        '| 郭玉朝 | 15703277652 | baldy@163.com |',
        '|  | abc | def'
      ].join('\n'),
      output = [
        '| 姓名   |     电话     |              邮箱 |',
        '|-------|:-----------:|-----------------:|',
        '| 王顶   | 13582027613 | 408542507@qq.com |',
        '| 郭玉朝 | 15703277652 |    baldy@163.com |',
        '|       |     abc     |              def |'
      ].join('\n');

    expect(reformatReadmeDoc(input, {})).to.eql(output);
  });

  it('should reformat a markdown table 3', function () {
    const input = [
        '## 标题',
        '',
        '| 姓名 | 电话 | 邮箱 |',
        '| --- | :---: | ---: |',
        '| 王顶 | 13582027613 | 408542507@qq.com |',
        '| 郭玉朝 | 15703277652 | baldy@163.com |',
        '|  | abc | def'
      ].join('\n'),
      output = [
        '## 标题',
        '',
        '| 姓名   |     电话    |             邮箱 |',
        '|--------|:-----------:|-----------------:|',
        '| 王顶   | 13582027613 | 408542507@qq.com |',
        '| 郭玉朝 | 15703277652 |    baldy@163.com |',
        '|        |     abc     |              def |'
      ].join('\n');
    console.log(reformatReadmeDoc(input, {'-v': '{"0": 0, "1": 2}'}));

    expect(reformatReadmeDoc(input, {'-v': '{"0": 0, "1": 2}'})).to.eql(output);
  });

});
