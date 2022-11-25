#!/usr/bin/env node
import welcomeUser from '../src/cli.js';
import evenGame from '../src/even.js';

const userName = welcomeUser();
evenGame(userName);
